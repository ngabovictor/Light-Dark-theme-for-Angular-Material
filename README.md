# Light-Dark theme for Angular Material

This is a custom theme made for `Material` in `Angular`. It used `Twitter` color palletes by default, feel free to make changes as you want.

## Download & Integration

1. Download/clone this repository
2. Copy both `light-theme.scss` and `dark-theme.scss` to `src` directory.
3. Import those files in your `styles.scss`.

```bash
@import "light-theme.scss";
@import "dark-theme.scss";
```

4. Add these files in **all** `angular.json` styles sections as well
```bash
...
"styles": [
        ...,
        "src/light-theme.scss",
        "src/dark-theme.scss",
        "src/styles.scss",
        ...
    ],
...
```
5. Copy the `theming-service` folder into the desired module(s) directories.
6. Import the `service` in module(s)

```bash
...
import { ThemingService } from './theming-service/themes.service';
import { OverlayContainer } from '@angular/cdk/overlay';
...
```

Add it providers section

```bash
...
providers: [
    ...,
    ThemingService,
    ...
]
...
```

Add classes to export class

```bash
...
export class YourModule {
  constructor(overlayContainer: OverlayContainer, theming: ThemesService) {
    theming.defaultTheme.subscribe((theme: string) => {
      let themeToRemove = 'dark-theme';
      if (theme === 'dark-theme') {
        themeToRemove = 'light-theme';
        document.querySelector("body").style.background = '#060b0f';
      } else {
        document.querySelector("body").style.background = '#fff';
      }
      overlayContainer.getContainerElement().classList.remove(themeToRemove);
      overlayContainer.getContainerElement().classList.add(theme);
    });
  }
}
...
```

7. In root html template (or any you want), create a `container div` with `class` to take the current theme value.

```bash
<div [className]="theme">
... 
ALL YOUR COMPNENTS HERE
...
</div>
```

IN `.ts`

```bash
theme: string = 'light-theme'; //default to light

contructor(private theming: ThemingService) {}

ngOnInit() {
    ...
    //Get the current theme

    this.theming.defaultTheme.subscribe((theme: string) => {
        this.theme = theme;
    });

    ...

}

//Change theme theme function to be called accordingly

changeTheme(theme: string) {
    this.theming.toggleTheme(theme);
}
````