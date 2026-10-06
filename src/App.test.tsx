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

    expect(screen.getAllByText(/1000DEVs – Talentos para o Bem/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Grupo Petrópolis \+ TNT Energy Drink/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Bootcamp KPMG \+ SoulCode Academy/i).length).toBeGreaterThan(0);
  });

  it('renders the self-hosted portfolio project', () => {
    render(<App />);

    expect(
      screen.getAllByRole('heading', { name: /Portfolio Self-Hosted/i }).length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(/servidor ARM64 próprio/i).length).toBeGreaterThan(0);
  });
});
