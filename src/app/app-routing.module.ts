import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent} from './chat/chat.component';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Chat' , component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
