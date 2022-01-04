import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BookmarksComponent,
    SearchBarComponent,
    VideoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
