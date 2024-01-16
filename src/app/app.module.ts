import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DriverComponent } from './components/driver/driver.component';
import { MovieComponent } from './components/movie/movie.component';
import { AddDashBetweenPipe } from './sharedPipes/add-dash-between.pipe';
import { FulltimePipe } from './sharedPipes/fulltime.pipe';
import { ProductComponent } from './components/product/product.component';
import { GithubComponent } from './components/github/github.component';
import { NobelComponent } from './components/nobel/nobel.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RatingComponent } from './sharedComponents/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, StudentComponent, TrainerComponent, EmployeeComponent, DriverComponent, MovieComponent, AddDashBetweenPipe, FulltimePipe, ProductComponent, GithubComponent, NobelComponent, HomeComponent, ErrorComponent, RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
