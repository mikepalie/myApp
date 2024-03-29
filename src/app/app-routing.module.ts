import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { StudentComponent } from './components/student/student.component';
import { DriverComponent } from './components/driver/driver.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GithubComponent } from './components/github/github.component';
import { ProductComponent } from './components/product/product.component';
import { NobelComponent } from './components/nobel/nobel.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "Movies", component: MovieComponent },
  { path: "Students", component: StudentComponent },
  { path: "Drivers", component: DriverComponent },
  { path: "Employees", component: EmployeeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Nobel", component: NobelComponent },
  { path: "Github", component: GithubComponent },
  { path: "Product", component: ProductComponent },
  
  { path: "", redirectTo: "/Movies", pathMatch: "full" },
  { path: "Mathites", redirectTo: "/Students", pathMatch: "full" },
  
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
