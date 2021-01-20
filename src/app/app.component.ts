import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.getTitle();
    this.getMetas();
  }

  getTitle(): void {
    const appTitle = this.title.getTitle(); /* Obtener el titulo actual */
    console.log(appTitle);

    this.router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd;
        }),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data.title) {
            return child.snapshot.data.title;
          }
          return appTitle;
        })
      )
      .subscribe((ttl: string) => {
        this.title.setTitle(ttl);
      });
  }

  getMetas(): void {
    const tags = this.meta.getTags('name');
    for (const tag of tags) {
      // console.log(tag);
    }
  }
}
