# tvmaze

## Architectuur keuzes

#### TypeScript
Met types werken is pog

#### E2E 
Project gebruikt Playright. In het verleden Cypress gebruikt wat ook fijn werkte, maar had ook goede verhalen gehoord over playright en wilde dit eens gebruiken.

#### File structuur
Elk component krijgt zijn eigen folder met:
- Vue file voor component
- SASS file voor component specifieke styling
- Unit test (spec) file; geen losse folder

#### Components
- Navbar component met genre
    - genre component
    - search component
    - rating component (later)
- Dashboard view
    - Carousel component met xav top shows
    - list component voor shows gebaseerd op filter
    - card component waar op geklikt kan worden
- Show detail view

#### Extra libraries
- Bootstrap; overweging Material maar bootstrap heeft iets meer prebuild componenten om snel te kunnen gebruiken.

<!-- -------------------------------------------------------- -->


## Acties
- Setup SASS loaders
- Setup bootstrap
- File structuur
    - components met vue, sass en spec file?

## TODO:
- url hightlighting 

- Voeg een zoek filter toe
- Voeg een home pagina met top shows
- Voeg een filter toe voor genre
- Voeg een filter toe voor rating
- Voeg een horizontale lijst toe

### Tech wise
- dependabot / 