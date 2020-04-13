#React Pagination
[DEMO LINK](https://skcorpion.github.io/pagintion-react/)

## Tasks done

1. Implement `Pagination` component
   ```jsx harmony
   <Pagination
     total={42} /* required */
     perPage={5} /* optional with 5 by default */
     page={1} /* optional with 1 by default */
   />
   ```
2. Integrate React Router to show selected `?page=2&perPage=7` as `queryParams`
   - Read the `queryParams` from URL when component appears and apply them
3. Implement `prev` and `next` buttons
4. Add an optional param `withInfo` to show extra info before the buttons (`6 - 10 of 20`)
5. Implement `<select>` (`3, 5, 10, 20`) field to change `perPage` and `onPerPageChange` callback
6. Change view to show buttons only for the `first`, `last`, `current`, one `precurrent` and `postcurrent` pages
   - `< 1 ... 4 [5] 6 ... 12 >`
   - `< [1] 2 ... 12 >`
