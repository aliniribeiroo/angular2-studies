import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'giphy-search',
      loadChildren: './giphy/giphy-search-manual/giphy-search-manual.module#GiphySearchManualComponentModule'
    },
    {
      path: 'directive-common',
      loadChildren: './directive-common-module/directive-common.module#DirectiveCommonModule'
    },
    {
      path: 'pipes',
      loadChildren: './pipe/pipe.module#PipeModule'
    },
    {
      path: 'change-detection',
      loadChildren: './change-detection/change-detection.module#ChangeDetectionModule'
    }

  ])],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

