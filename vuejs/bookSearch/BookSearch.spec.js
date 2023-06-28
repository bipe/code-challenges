import { readFileSync } from "fs";
import { mount } from "@vue/test-utils";
import BookSearch from "@/components/BookSearch.vue";
/* eslint-disable no-unused-vars */

// The unit tests were provided by the company and the code had to pass all of them without changing.

describe("BookSearch", () => {
  const booksData = readFileSync("./sample_data/books.json");
  let books;
  let wrapper;

  beforeEach(() => {
    books = JSON.parse(booksData);
    wrapper = mount(BookSearch, { propsData: { books } });
  });

  describe("the correct elements were rendered", () => {
    test("should have 5 input elements for required search fields", () =>
      [
        ".author",
        ".title",
        ".language",
        ".country",
        ".year",
      ].forEach(e => expect(wrapper.find(e).exists()).toBe(true))
    );

    test("should initially show all books", () => {
      expect(wrapper.exists(".book")).toBe(true);
      expect(wrapper.findAll(".book")).toHaveLength(books.length);
    });

    test("should render data for each field in a book", () => {
      const html = wrapper.findAll(".book").at(0).html();
      [
        "Chinua Achebe",
        "Nigeria",
        "English",
        "209",
        "Things Fall Apart",
        "1958"
      ].forEach(e => expect(html.includes(e)).toBe(true));
    });
  });

  describe("searching by each field alone", () => {
    describe("modifying the author field", () => {
      let input;

      beforeEach(() => {
        input = wrapper.find(".author");
        input.setValue("woolf");
      });

      test("should respond to change events", () => {
        expect(input.element.value).toEqual("woolf");
      });

      test("should filter books on the author query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(2);
        expect(wrapper.findAll(".book")
          .at(0).html().includes("Dalloway")).toBe(true);
        expect(wrapper.findAll(".book")
          .at(1).html().includes("Lighthouse")).toBe(true);
      });
    });

    describe("modifying the title field", () => {
      let input;

      beforeEach(() => {
        input = wrapper.find(".title");
        input.setValue("dea");
      });

      test("should respond to change events", () => {
        expect(input.element.value).toEqual("dea");
      });

      test("should filter books on the author query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(3);
        expect(wrapper.findAll(".book")
          .at(0).html().includes("Euripides")).toBe(true);
        expect(wrapper.findAll(".book")
          .at(1).html().includes("Nikolai Gogol")).toBe(true);
        expect(wrapper.findAll(".book")
          .at(2).html().includes("The Death of Ivan Ilyich")).toBe(true);
      });
    });

    describe("modifying the country field", () => {
      let input;

      beforeEach(() => {
        input = wrapper.find(".country");
        input.setValue("ITALY");
      });

      test("should respond to change events", () => {
        expect(input.element.value).toEqual("ITALY");
      });

      test("should filter books on the country query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(5);
        [
          "Dante Alighieri",
          "Giovanni Boccaccio",
          "Giacomo Leopardi",
          "Elsa Morante",
          "Italo Svevo"
        ].forEach((e, i) =>
          expect(wrapper.findAll(".book")
            .at(i).html().includes(e)).toBe(true)
        );
      });
    });

    describe("modifying the language field", () => {
      let input;

      beforeEach(() => {
        input = wrapper.find(".language");
        input.setValue("SPanish");
      });

      test("should respond to change events", () => {
        expect(input.element.value).toEqual("SPanish");
      });

      test("should filter books on the language query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(6);
        [
          "Jorge Luis Borges",
          "Miguel de Cervantes",
          "Gypsy Ballads",
          "One Hundred Years of Solitude",
          "Love in the Time of Cholera",
          "Juan Rulfo"
        ].forEach((e, i) =>
          expect(wrapper.findAll(".book")
            .at(i).html().includes(e)).toBe(true)
        );
      });
    });

    describe("modifying the year field", () => {
      let input;

      beforeEach(() => {
        input = wrapper.find(".year");
        input.setValue("196");
      });

      test("should respond to change events", () => {
        expect(input.element.value).toEqual("196");
      });

      test("should filter books on the language query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(4);
        [
          "Ficciones",
          "One Hundred Years of Solitude",
          "The Golden Notebook",
          "Season of Migration to the North",
        ].forEach((e, i) =>
          expect(wrapper.findAll(".book")
            .at(i).html().includes(e)).toBe(true)
        );
      });
    });
  });

  describe("filtering on multiple terms", () => {
    describe("filtering on 192 and english", () => {
      beforeEach(() => {
        wrapper.find(".year").setValue("192");
        wrapper.find(".language").setValue("english");
      });

      test("should filter books on the language and year query", () => {
        expect(wrapper.findAll(".book")).toHaveLength(4);
        [
          "Sound and the Fury",
          "Ulysses",
          "Mrs Dalloway",
          "To the Lighthouse",
        ].forEach((e, i) =>
          expect(wrapper.findAll(".book")
            .at(i).html().includes(e)).toBe(true)
        );
      });
    });

    describe("filtering on all fields with trim", () => {
      beforeEach(() => {
        wrapper.find(".author").setValue(" all ");
        wrapper.find(".title").setValue(" t  ");
        wrapper.find(".country").setValue("ni");
        wrapper.find(".language").setValue("english");
        wrapper.find(".year").setValue("195");
      });

      test("should filter books on all fields", () => {
        expect(wrapper.findAll(".book")).toHaveLength(1);
        [
          "Edgar Allan Poe",
          "United States",
          "English",
          "842",
          "Tales",
          "1950"
        ].forEach(e =>
          expect(wrapper.findAll(".book")
            .at(0).html().includes("")).toBe(true)
        );
      });
    });

    describe("filtering on terms that have no results", () => {
      beforeEach(() => {
        wrapper.find(".year").setValue("190");
        wrapper.find(".language").setValue("spanish");
      });

      test("should filter books on the language and year query", () => {
        expect(wrapper.findAll(".book").exists()).toBe(false);
        expect(wrapper.findAll(".book")).toHaveLength(0);
      });
    });
  });
});