import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'classroom',
    loadChildren: () => import('./classroom/classroom.module').then( m => m.ClassroomPageModule)
  },
  {
    path: 'student-info',
    loadChildren: () => import('./student-info/student-info.module').then( m => m.StudentInfoPageModule)
  },
  {
    path: 'teacher-info',
    loadChildren: () => import('./teacher-info/teacher-info.module').then( m => m.TeacherInfoPageModule)
  },
  {
    path: 'classroom-info',
    loadChildren: () => import('./classroom-info/classroom-info.module').then( m => m.ClassroomInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
