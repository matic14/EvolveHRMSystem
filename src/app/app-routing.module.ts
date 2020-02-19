import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'attendence-sheet',
    loadChildren: () => import('./home/attendence-sheet/attendence-sheet.module').then( m => m.AttendenceSheetPageModule)
  },
  {
    path: 'emp-monthly-att',
    loadChildren: () => import('./emp-monthly-att/emp-monthly-att.module').then( m => m.EmpMonthlyAttPageModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./home/employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
  },
  {
    path: 'total-emp',
    loadChildren: () => import('./total-emp/total-emp.module').then( m => m.TotalEmpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
