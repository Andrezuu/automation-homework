describe("Flux 1", () => {
  const pageURL = "https://www.upbvirtual.net/upbvirtual/";
  const code = Cypress.env("CODE");
  const upb_pwd = Cypress.env("UPBVIRTUAL_PWD");
  const pdis = Cypress.env("PDIS_LINK");
  const automationHW = Cypress.env("HW_LINK");
  const now = new Date();
  var isLoggedIn = false;

  beforeEach(() => {
    isLoggedIn = false;
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
    cy.get(`a[class="comment-link"]`).should("exist").click();
    cy.get(`textarea[name="content"]`)
      .should("exist")
      .type(`Autocomentado a las ${now}`);
    cy.contains("Guardar comentario").click();
  });
});
