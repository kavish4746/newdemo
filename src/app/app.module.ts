import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { DemoComponent } from './demo/demo.component';
import { TodoComponent } from './todo/todo.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    DemoComponent,
    TodoComponent,
    StudentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
