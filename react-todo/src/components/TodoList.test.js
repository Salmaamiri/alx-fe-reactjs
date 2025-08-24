import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    beforeEach(() => {
        render(<TodoList />);
    });

    test('should render the initial todos', () => {
        const todoList = screen.getByRole('list');
        expect(todoList).toBeInTheDocument();
        
        const todoItems = screen.getAllByRole('listitem');
        expect(todoItems).toHaveLength(3); // Initial todos count
    });

    test('should add a new todo', () => {
        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const newTodo = screen.getByText('New Todo');
        expect(newTodo).toBeInTheDocument();
    });

    test('should toggle todo completion status', () => {
        const firstTodo = screen.getAllByTestId(/todo-item-/)[0];
        
        // Initial state - not completed
        expect(firstTodo).toHaveStyle({ textDecoration: 'none' });
        
        // Click to complete
        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle({ textDecoration: 'line-through' });
        
        // Click again to uncomplete
        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle({ textDecoration: 'none' });
    });

    test('should delete a todo', () => {
        const initialTodos = screen.getAllByTestId(/todo-item-/);
        const initialCount = initialTodos.length;
        
        const deleteButton = screen.getAllByTestId(/delete-button-/)[0];
        fireEvent.click(deleteButton);

        const remainingTodos = screen.getAllByTestId(/todo-item-/);
        expect(remainingTodos).toHaveLength(initialCount - 1);
    });
});
