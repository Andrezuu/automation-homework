describe("Flux 1", () => {
  const pageURL = "https://www.upbvirtual.net/upbvirtual/";
  const code = Cypress.env("CODE");
  const upb_pwd = Cypress.env("UPBVIRTUAL_PWD");
  const pdis = Cypress.env("PDIS_LINK");
  const automationHW = Cypress.env("HW_LINK");
  const now = new Date();

  before(() => {
    cy.visit(pageURL);
  });

  it("Auto comment on automation homework", () => {
    cy.get("#username").should("exist");
    cy.get("#username").type(code);
    cy.get("#password").should("exist");
    cy.get("#password").type(upb_pwd);
    cy.contains("Acceder").click();
    cy.get(`a[href="${pdis}"]`).first().should("exist").click();
    cy.get(`a[href="${automationHW}"]`).first().should("exist").click();
    cy.wait(1000);
    cy.get(`a[class="comment-link"]`).should("exist").click();
    cy.get(`textarea[name="content"]`)
      .should("exist")
      .type(`Autocomentado a las ${now}`);
    cy.get(`textarea[name="content"]`)
      .should("exist")
      .clear()
      .type(`Autocomentado a las ${now}`);
    cy.contains("Guardar comentario").click();
  });
});

describe("Flux 2", () => {
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

describe("Flux 3", () => {
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
      cy.get(`svg[class="octicon octicon-comment v-align-middle"]`)
        .first()
        .click();
    });
  });
});
