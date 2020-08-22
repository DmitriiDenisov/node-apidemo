import { logger } from '../utils/logger';

export const getSectors = async (request, response, next) => {
  logger.info('Controller start: getSector');

  try {
    logger.info('Controller finished successfully: getSector');

    return response.status(200).json([
      { id: 1, name: 'Sector 1' },
      { id: 2, name: 'Sector 2' },
      { id: 3, name: 'Sector 3' }
    ]);
  } catch (err) {
    logger.info('Controller finished with error: getSector');

    response.status(500);
    return next(err, request, response);
  }
};
