/**
 * The Adobe Connect API
 */
export interface connectApp {
  Window: Window;
}

/**
 * The window API
 */
export interface Window {
  /**
   * Set the window title
   */
  setWindowText(windowText: string): boolean;

  /**
   * Get the window dimensions
   * Both dimensions are always 0
   */
  getWindowDimension(): WindowDimension;

  /**
   * Set the window dimensions
   */
  setWindowDimension(cx: number, cy: number): boolean;

  /**
   * Check if the window is maximized
   */
  isMaximized(): boolean;

  /**
   * Maximize the window
   */
  maximize(): boolean;

  /**
   * Restore the window
   */
  restore(): boolean;

  /**
   * Check if the window is minimized
   */
  isMinimized(): boolean;

  /**
   * Minimize the window
   */
  minimize(): boolean;

  /**
   * Check if the window can start palette
   */
  canStartPalette(): boolean;

  /**
   * Check if the window is in palette mode
   */
  inPaletteMode(): boolean;

  /**
   * Set the palette mode
   */
  setPaletteMode(
    bPaletteMode: boolean,
    nWidth: number,
    nHeight: number
  ): boolean;

  /**
   * Set the palette dimension
   */
  setPaletteDimension(nWidth: number, nHeight: number): boolean;

  /**
   * Show the palette
   */
  showPalette(bVisible: boolean): boolean;

  /**
   * Set the progress
   */
  setProgress(nValue: number): boolean;

  /**
   * Get the progress
   */
  getProgress(): number;

  /**
   * Set the max progress
   */
  setMaxProgress(nValue: number): boolean;

  /**
   * Get the max progress
   */
  getMaxProgress(): number;

  /**
   * Set the progress state
   */
  setProgressState(state: string): boolean;

  /**
   * Get the progress state
   */
  getProgressState(): string;

  /**
   * Get the toast manager
   */
  getToastManager(): ToastManager;

  /**
   * Cancel the update
   */
  cancelUpdate(): void;
}

/**
 * Window dimension
 */
export type WindowDimension = {
  cx: number;
  cy: number;
};

/**
 * Toast manager
 */
export interface ToastManager {
  /**
   * Close all toasts
   */
  closeAllToasts(): boolean;

  /**
   * Create a toast
   */
  createToast(
    szTitle: string,
    szMessage: string,
    bMsgClickable: boolean,
    szBtn1: string,
    szBtn2: string,
    toastIcon?: string
  ): ToastWindow | null;

  /**
   * Create a timed toast
   */
  createTimedToast(
    szTitle: string,
    szMessage: string,
    bMsgClickable: boolean,
    szBtn1: string,
    szBtn2: string,
    nTimeout: number,
    toastIcon?: string
  ): ToastWindow | null;

  /**
   * Get the visible toast count
   */
  visibleToastCount(): number;

  /**
   * Set the event handler
   */
  setEventHandler(eventHandler: (event: Event) => void): void;
}

/**
 * Toast window
 */
export interface ToastWindow {
  /**
   * Get the window id
   */
  id(): number;

  /**
   * Show the toast
   */
  showToast(): boolean;

  /**
   * Remove the toast
   */
  removeToast(): boolean;
}
