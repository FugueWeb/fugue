import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { UtilsModule } from './services/utils.module';

import { AppComponent } from './app.component';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BottomNavModule } from 'ngx-bottom-nav';
import { CoverComponent } from './home/components/cover/cover.component';
import { DefinitionComponent } from './home/components/definition/definition.component';
import { DedicationComponent } from './home/components/dedication/dedication.component';
import { AuthorComponent } from './home/components/author/author.component';
import { LightboxModule } from 'ngx-lightbox';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component';
import { SwiperModule } from 'swiper/angular';
import { UnsafeHtmlPipe } from './pipes/unsafe-html.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    UtilsModule,
    BottomNavModule,
    LightboxModule,
    SwiperModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
    DebugComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    PageNotFoundComponent,
    CoverComponent,
    DefinitionComponent,
    DedicationComponent,
    AuthorComponent,
    ChapterPageComponent,
    UnsafeHtmlPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
