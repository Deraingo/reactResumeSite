# My React Site

This is an ongoing project to work more or less as an interactive portfolio.

I will work on updating this README moving foreward with potential help options for anyone wanting to run any projects listed in the website that aren't immedietly accessible via interacting with the site.

# Finals Roulette Update Features Changes and Plans

With the finals roulette bots being popular I have decided to move away from a roulette page but instead create an informational page for users to get better data on their class and weapons and how to plan better counters

## immediate features

- Refactor finals roulette for the following
  - Add a forum for "customizing a class"
  - Users select class->spec->weapon->equipment
  - Weapon, Equipment, and Spec info will be displayed in the weapon card, or a user can click the card and open the weapon data in a popup

## Future Features

- Include a filters for play types (July 2026)
  - Defensive, Aggressive
  - Destruction, Damage, Support, Stall
- A "Best Counters" And "Best Countered By" (August 2026)
  - i.e. flame is choked by smoke, but chokes gas
- Graphs showing weapon trends (November 2026)
- Community Tips
- A favorites list (July 2026)
- Team Builder (August 2026)

### Acomplishing this

- Create multiple rendered components for the wizard
  - Class, Weapon, Spec, Equipment
  - Class is passed into Spec, Spec and class are passed to weapon, etc...
    - This is to make sure everything stays consistent and to make future updates easier
- Will keep the ability for random loadouts.
