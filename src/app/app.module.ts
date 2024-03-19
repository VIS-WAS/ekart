import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ZTeachComponent } from './z-teach/z-teach.component';
import { ChildComponent } from './z-teach/child/child.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { SampleDirective } from './CustomDirectives/sample.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
import { StyleDirective } from './CustomDirectives/style.directive';
import { IfDirective } from './CustomDirectives/if.directive';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { Comp1Component } from './view-encapsulation/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation/comp2/comp2.component';
import { AngularServicesComponent } from './angular-services/angular-services.component';
import { HomeComponent } from './angular-services/header/home/home.component';
import { HeroComponent } from './angular-services/header/home/hero/hero.component';
import { SidebarComponent } from './angular-services/header/home/sidebar/sidebar.component';
import { HeaderServiceComponent } from './angular-services/header/header.component';
import { AdminComponent } from './angular-services/header/admin/admin.component';
import { UserDetailsComponent } from './angular-services/header/admin/user-details/user-details.component';
import { UserListComponent } from './angular-services/header/admin/user-list/user-list.component';
// import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    ZTeachComponent,
    ChildComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    SampleDirective,
    DisableProductDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
    ViewEncapsulationComponent,
    Comp1Component,
    Comp2Component,
    AngularServicesComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    HeaderServiceComponent,
    AdminComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],

  //------------// Dependency module injector //---------------//
  // providers: [SubscribeService],
  //------------// Dependency modile injector //---------------//
  bootstrap: [AppComponent],
})
export class AppModule {}
