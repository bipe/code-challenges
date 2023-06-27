# Task

Web applications often require keeping a unique list of items entered by a user. For example, an app containing a list of category tags for a post should prevent the user from entering duplicate tags.

For this challenge, you'll create a simple component `UniqueList` which renders the following skeleton:

```
<template>
  <div>
    <div>
      <input data-testid="item-input" />
      <button data-testid="add-button"></button>
      <button data-testid="remove-button"></button>
      <button data-testid="clear-button"></button>
    </div>
    <ul data-testid="items">
    </ul>
  </div>
</template>
```

You may modify this template to the extent that the test suite allows; `data-testid` attributes are used by the test suite to locate elements.

---

## Functionality Specifications

Here are the requirements you'll be implementing for the `UniqueList` component.

### Text input

The user will enter text into the `item-input` field. When the user presses the Enter key with this element active (firing the keydown event), the add item functionality should be activated as if the `add-button` button had been clicked. Upon submission of the input field's content, the value should have leading and trailing whitespace trimmed before any subsequent operation is performed.

### Adding items

After whitespace trimming, an item from the submitted input using the add button (or, equivalently, firing an Enter keydown event when focused on the `<input data-testid="item-input" />` element) will be added to the list and appended to the `<ul data-testid="items">` as an `<li>` child if it is not an empty string and it is not already present in the list (case sensitive).

### Removing items

After whitespace trimming, an item from the submitted input using the remove item button (`remove-button`) will be removed from the list if it is not an empty string and it is not already present in the list (case sensitive).

### Clearing items

The clear items button (`clear-button`) should clear the list completely, updating the state only if the list wasn't already empty.

### Updating state and DOM

Only update the component's state if the add, remove or clear operation resulted in a change to the list contents. More specifically, if any of the add, remove or clear operations failed in response to an event (the text input element was empty or entirely whitespace, the item was already in the list upon add, the item wasn't in the list upon removal, or a clear operation was performed on an empty list), don't update the DOM or clear the input text field.

Conversely, if any action was successful in updating DOM state, clear the input element's text content.

### Style

Include some simple CSS and design in your component's stylesheet. There is no predefined correct way of handling these; the goal is to get a sense for your comfort level with both.

---

## Demo

This demo shows the finished app in action. Note cases when the input element is cleared and when it isn't, and the trimming behavior for all strings input via the text field.

!https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/22c50f14b0cb8c8a1eee68145e6145b2-ul.gif

---

## Resources

Feel free to consult [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Vue](https://v3.vuejs.org/guide/) and [Vue Test Utils](https://next.vue-test-utils.vuejs.org/guide/) documentation for assistance as you complete the challenge.

---

## Vue Dev Tools

See `./docs/vue-devtools.md` for more information on how to connect the dev tools, if you wish to do so.