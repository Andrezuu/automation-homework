describe("Flux 1", () => {
  const pageURL = "https://www.upbvirtual.net/upbvirtual/";
  const code = Cypress.env("CODE");
  const upb_pwd = Cypress.env("UPBVIRTUAL_PWD");
  const pdis = Cypress.env("PDIS_LINK");
  const automationHW = Cypress.env("HW_LINK");
  const now = new Date();
  const yt_link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  before(() => {
    cy.visit("https://www.nytimes.com/games/wordle/index.html");
  });

  it("Playing wordle", () => {
    cy.get(`button[data-testid="Play"]`).click();
    cy.get(`button[class="Modal-module_closeIcon__TcEKb"]`).click();
    cy.get(`button[data-key="h"]`).click();
    cy.get(`button[data-key="e"]`).click();
    cy.get(`button[data-key="l"]`).click();
    cy.get(`button[data-key="l"]`).click();
    cy.get(`button[data-key="o"]`).click();
    cy.get(`button[aria-label="enter"]`).click();

    cy.wait(5000);
    cy.get(`button[data-key="h"]`).click();
    cy.get(`button[data-key="o"]`).click();
    cy.get(`button[data-key="n"]`).click();
    cy.get(`button[data-key="e"]`).click();
    cy.get(`button[data-key="y"]`).click();
    cy.get(`button[aria-label="enter"]`).click();
  });
});
