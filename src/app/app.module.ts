import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MbiPipePipe } from './mbi-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbiGenerateComponent } from './mbi-generate/mbi-generate.component';
import { MbiVerifyComponent } from './mbi-verify/mbi-verify.component';

@NgModule({
  declarations: [
    AppComponent,
    MbiPipePipe,
    MbiGenerateComponent,
    MbiVerifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
