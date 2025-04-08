# pg-cloudflare-issue

Clone repo and install dependencies:

```
gh repo clone tmm/pg-cloudflare-issue
pnpm i
```

Update `connectionString` in `test/index.spec.ts`, and run the following:

```
pnpm test:pass
pnpm test:fail
```

```
Error: No such module "Users/user/Desktop/worker/node_modules/.pnpm/pg@8.14.1/node_modules/pg/lib/pg-cloudflare".
 ❯ getStream Users/user/Desktop/worker/node_modules/.pnpm/pg@8.14.1/node_modules/pg/lib/stream.js?mf_vitest_no_cjs_esm_shim:41:34
 ❯ new Connection Users/user/Desktop/worker/node_modules/.pnpm/pg@8.14.1/node_modules/pg/lib/connection.js?mf_vitest_no_cjs_esm_shim:18:36
 ❯ new Client Users/user/Desktop/worker/node_modules/.pnpm/pg@8.14.1/node_modules/pg/lib/client.js?mf_vitest_no_cjs_esm_shim:49:7
 ❯ BoundPool.newClient Users/user/Desktop/worker/node_modules/.pnpm/pg-pool@3.8.0_pg@8.14.1/node_modules/pg-pool/index.js?mf_vitest_no_cjs_esm_shim:222:20
 ❯ BoundPool.connect Users/user/Desktop/worker/node_modules/.pnpm/pg-pool@3.8.0_pg@8.14.1/node_modules/pg-pool/index.js?mf_vitest_no_cjs_esm_shim:216:10
 ❯ BoundPool.query Users/user/Desktop/worker/node_modules/.pnpm/pg-pool@3.8.0_pg@8.14.1/node_modules/pg-pool/index.js?mf_vitest_no_cjs_esm_shim:403:10
 ❯ test/index.spec.ts:8:28
      6|   connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
      7|  });
      8|  const result = await pool.query("SELECT $1::text as name", ["cloudflare"]);
       |                            ^
      9|  console.log(result.rows[0].name);
     10| });
```
