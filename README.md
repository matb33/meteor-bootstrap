# Bootstrap as Smart Packages for Meteor

This is an experimental Bootstrap smart package structure that affords the
developer full control over what components to load and use.

It's not recommended to use this in production until it has been released to
Atmosphere (should there be enough interest).

Is is heavily inspired by the core Meteor `accounts-ui` package structure.

## Getting Started

Clone this repo, and run `meteor`. You should be presented with an example
bootstrap page.

By default, this repo has added the `bootstrap-full` package, which uses all
the sub-packages to get you the full bootstrap experience.

Try removing this package: `meteor remove bootstrap-full`. When launching
`meteor` again, you should get a very plain, nearly unstyled version of the
example page (there are some basic default styles found under `client/theme.css`
which was lifted directly from the original example bootstrap page).

Now, try adding very specific bootstrap components. For example, try adding:
`meteor add bootstrap-buttons`. Notice that the necessary dependencies will be
loaded (`bootstrap-base` and `less`). Then, launch `meteor` again. You should
now get a somewhat bootstrap-styled page (some styles are core to bootstrap),
and the buttons should now be styled in a familiar boostrappy way.

## Usage

The idea here is that you can add exactly the components you need from Bootstrap
using the excellent built-in Meteor packaging system. If you take the
traditional file structure approach (`client/`, `server/`, `lib/` etc), then
you can manage what you want out of these bootstrap components using
`meteor add`.

If on the other hand, you develop using an all-packages methodology, then any
of your packages that need very specific bootstrap functionality can then
`api.use` them, knowning that only what is required will get pulled in. Should
you stop using an app-package that depends on, say `bootstrap-affix`, then the
affix functionality will be removed for you as part of removing said
app-package.

## Atmosphere?

If there is enough interest, these packages could be released individually under
Atmosphere. All `api.use` references would need to be updated to reference
something like `matb33:bootstrap-xxx`, and one wouldn't have to worry about
carrying around so many local packages.

## Downsides

Of course, there are downsides. First, Bootstrap is very well organized, but it
had a few minor issues to resolve. There were three "mixins", namely `.input-lg`,
`.input-sm` and `.form-inline` which were declared without parentheses, so
could not be shared easily without re-importing entire LESS files again,
resulting in duplicate declarations. I took the liberty of breaking those out
into a custom forms-package-specific `mixins.lessimport`. This will make future
updates a bit more cumbersome, as these deficiencies will need to be remedied
every time Bootstrap releases an update.

Lastly, and probably the most obvious downside, is that there are so many darn
packages! If you're not the maintainer, you couldn't care less -- it just works.
But for maintenance, I could foresee this being a bit onerous. But, that being
said, the granularity of these packages may end up proving convenient for
fine-grained updates. But when a new version of Bootstrap comes out, it won't
be so fun updating and deploying so many packages...

## Next Steps

For now, one can just copy all these packages into their own app's `packages/`
folder, but I wouldn't recommend that unless you have the energy to maintain
these on your own.

If anyone is interested in this approach and would like to collaborate on moving
and maintaining it on Atmosphere, then have a look -- try to find some issues
(usually will be specificity issues that Bootstrap's default concat may not take
into account). Then, get in touch and we'll see where this goes.