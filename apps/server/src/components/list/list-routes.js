import Router from '@koa/router'

const lists = new Router()

lists.get('/', async (ctx, next) => {
  console.log(ctx)
  ctx.ok('All list')
  ctx.body = 'All list'
})
lists.get('/:id', () => {})
lists.post('/', () => {})
lists.put('/:id', () => {})
lists.del('/:id', () => {})

export default lists