import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Portfolio', () => {
  it('renders the professional positioning', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Rômulo Pereira/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Software Engineer · Cloud · Cybersecurity · Tech Educator/i),
    ).toBeInTheDocument();
  });

  it('lists the SoulCode experience by program', () => {
    render(<App />);
    expect(screen.getByText(/1000DEVs – Talentos para o Bem/i)).toBeInTheDocument();
    expect(screen.getByText(/Grupo Petrópolis \+ TNT Energy Drink/i)).toBeInTheDocument();
    expect(screen.getByText(/Bootcamp KPMG \+ SoulCode Academy/i)).toBeInTheDocument();
  });

  it('renders the self-hosted portfolio project', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Portfolio Self-Hosted/i })).toBeInTheDocument();
    expect(screen.getByText(/servidor ARM64 próprio/i)).toBeInTheDocument();
  });
});
