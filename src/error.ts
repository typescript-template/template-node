import { setupErrorHandling } from 'ts-error-handler';
import { app } from './app';
import { log } from './log';

/**
 * Global error handler for uncaught exceptions
 *
 * @param e
 */
export function errorHandler(error: Error): void {
	log.fatal(error.toString(), error);

	app.exit();
}

// Setup error handling
setupErrorHandling({
	handler: errorHandler,
});
