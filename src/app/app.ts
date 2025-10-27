import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet  , Header , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DuAn_Wed');
}
