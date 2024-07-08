# Enabling the Search Button in the Online Library

In our Online Library System, it's crucial that a user can't search for a book with an empty query. The provided code creates a `BookSearchForm` component that allows users to enter their search term and ensures that the event is not processed if the search input contains only whitespace.

Note: The `trim()` function trims all the whitespace characters from the beginning and the end of the string. So `" ABC "` will be converted to `"ABC"` and `" "` will be converted to `""` with this method.