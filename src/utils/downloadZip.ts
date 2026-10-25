/**
 * Safe client-side Blob downloader for the project zip.
 * Validates file size to ensure the browser does not save an HTML redirect page.
 */
export async function downloadProjectZip(
  setStatus?: (status: { type: 'idle' | 'loading' | 'success' | 'error'; message: string }) => void
): Promise<boolean> {
  if (setStatus) {
    setStatus({ type: 'loading', message: 'Downloading verified project archive (~238 KB)...' });
  }

  try {
    // Attempt fetching from the static public route first, then fall back to API
    let response = await fetch('/esaal-e-swaab-project.zip?t=' + Date.now());
    if (!response.ok) {
      response = await fetch('/api/download-project?t=' + Date.now());
    }

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const blob = await response.blob();

    // Verify it is an actual zip archive (> 50 KB) and not an HTML redirect (which is ~11 KB)
    if (blob.size < 50000) {
      throw new Error(
        `Received an HTML redirect or partial file (${Math.round(blob.size / 1024)} KB) instead of the zip archive.`
      );
    }

    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = 'esaal-e-swaab-project.zip';
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    if (setStatus) {
      setStatus({
        type: 'success',
        message: `Success! esaal-e-swaab-project.zip (${Math.round(blob.size / 1024)} KB) downloaded. You can now extract it safely with WinRAR.`,
      });
    }
    return true;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    if (setStatus) {
      setStatus({
        type: 'error',
        message: `Download issue: ${errorMsg}. You can also use the alternate direct download or Git command below.`,
      });
    }
    return false;
  }
}
