import express from 'express';
import { getSectors } from '../controllers';


/**
 * @swagger
 *
 * definitions:
 *   sector:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: sectors
 *   description: Sectors endpoint
 */

/**
 * @swagger
 * /data-api/sectors:
 *   get:
 *     description: Serves an array of sectors
 *     tags: [sectors]
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type:
 *                 array
 *               items:
 *                 $ref: '#/definitions/sector'
 *       500:
 *         description: Unexpected error
 *
 */


const router = express.Router();

router.get('', getSectors);

export default router;
