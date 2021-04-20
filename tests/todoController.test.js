const { todoController } = require('../controllers/todoController');

describe('todoController', () => {
    it('should have a createTodo function', () => {
        expect(typeof todoController).toBe('function');
    })
})