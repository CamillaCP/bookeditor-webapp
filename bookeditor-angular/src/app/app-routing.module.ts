import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

/* Array che contiene l'elenco delle routes dell'applicazione. Ad ogni percorso di navigazione è associato
il relativo componente */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'books', component: BooksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

