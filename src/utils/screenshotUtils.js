import html2canvas from 'html2canvas';

/**
 * Takes a screenshot of a given HTML element and triggers a download.
 *
 * @param {HTMLElement} targetElement - The DOM element to screenshot.
 * @param {string} fileName - The desired filename for the downloaded image.
 * @param {function} setFeedback - Callback to update UI feedback message.
 * @param {function} speak - Callback to trigger text-to-speech.
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken and downloaded.
 */
export const captureAndDownloadScreenshot = async (
  targetElement,
  fileName,
  setFeedback,
  speak
) => {
  if (!targetElement) {
    console.error('Screenshot Utility: No target element provided.');
    setFeedback('Error: No content to screenshot.');
    speak('Error. No content to screenshot.');
    throw new Error('No target element for screenshot');
  }

  setFeedback('Generating screenshot...');
  try {
    const canvas = await html2canvas(targetElement, {
      scale: 2,
      useCORS: true,
      logging: false, 
    });

    const image = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = image;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Screenshot saved!');
    setFeedback('Screenshot saved successfully!');
    speak('Screenshot saved successfully!');

  } catch (error) {
    console.error('Screenshot Utility Error:', error);
    setFeedback(`Error taking screenshot: ${error.message}`);
    speak('Error taking screenshot.');
    throw error;
  }
};