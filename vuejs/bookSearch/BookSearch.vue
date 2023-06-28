<template>
  <div class="container">
    <h1>Search for Books</h1>

    <div v-for="(_, key) in filters" class="filter-container" :key="key">
      <label :for="key">{{ key }}</label>
      <input :id="key" :class="key" v-model="filters[key]" />
    </div>

    <div class="books-container">
      <div v-for="book in filteredBooks" class="book" :key="book.title">
        <p>Author: {{ book.author }}</p>
        <p>Title: {{ book.title }}</p>
        <p>Country: {{ book.country }}</p>
        <p>Language: {{ book.language }}</p>
        <p>Pages: {{ book.pages }}</p>
        <p>Year: {{ book.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filters: {
        author: '',
        title: '',
        country: '',
        language: '',
        year: ''
      }
    };
  },
  computed: {
    filteredBooks() {
      const { author, title, country, language, year } = this.filters;

      return this.books.filter(book => {
        const bookAuthor = book.author.toLowerCase();
        const bookTitle = book.title.toLowerCase();
        const bookCountry = book.country.toLowerCase();
        const bookLanguage = book.language.toLowerCase();
        const bookYear = String(book.year);

        return (
          bookAuthor.includes(author.toLowerCase().trim()) &&
          bookTitle.includes(title.toLowerCase().trim()) &&
          bookCountry.includes(country.toLowerCase().trim()) &&
          bookLanguage.includes(language.toLowerCase().trim()) &&
          bookYear.includes(year.toLowerCase().trim())
        );
      });
    }
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #232429;
  color: #fff;
}

.container {
  margin: 0 48px;
}

h1 {
  align-content: center;
  margin: 36px 0;
}

label {
  color: #fff;
  display: block;
  margin-bottom: 6px;
}

input {
  border: none;
  background-color: #464651;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 12px;
}

.filter-container {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}

.books-container {
  margin-top: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.book {
  background-color: #3E3F44;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
}
</style>
