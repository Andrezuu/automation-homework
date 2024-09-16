describe("Flux 1", () => {
  beforeEach(() => {
    cy.visit("https://make-everything-ok.com/");
  });

  it("Everything is ok test", () => {
    cy.get(`div[id="button"]`).click();
    cy.wait(8000);
    cy.get(`#line`).should("have.attr", "style", "width: 0px;");
    cy.get(`p[class="button"]`).click();
    cy.origin("https://github.com/PaulLandaeta/isc-system-web", () => {
      cy.visit("https://github.com/PaulLandaeta/isc-system-web");
      cy.get(`span[data-content="Pull requests"]`).click();
      cy.get(`a[id="issue_36_link"]`).click();
    });
  });
});
