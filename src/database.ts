import { pool } from "./connection";

export const test01 = async () => {
  const result = await pool.query("select * from test01");
  return result.rows;
};
