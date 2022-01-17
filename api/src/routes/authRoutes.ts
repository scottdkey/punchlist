import Router from "@koa/router"



const router = new Router()


router.get("/working", async (ctx, next) => {
  ctx.body = {
    message: "working"
  }
  ctx.status = 200
  next()
})

export default router