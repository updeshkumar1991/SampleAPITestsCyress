describe("Test User API with fail cases", () => {
  context("Failure cases - GET /user", () => {
    it("should return Unauthorized in case of no token provided", () => {
      cy.request({
        failOnStatusCode: false,
        method: "GET",
        url: "https://api.github.com/user",

        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer ",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }).should((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });

  context("Failure cases - GET /user", () => {
    it("should return Unauthorized in case of Invalid token", () => {
      cy.request({
        failOnStatusCode: false,
        method: "GET",
        url: "https://api.github.com/user",

        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer ghp_gAk5PTVs9Bdp3h4R0cy70Lz6XyzZYx",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }).should((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });

  context("Failure cases - GET /user", () => {
    it("should return Unauthorized in case of Token Without Necessary Permissions", () => {
      cy.request({
        failOnStatusCode: false,
        method: "GET",
        url: "https://api.github.com/user",

        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer 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",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }).should((response) => {
        expect(response.status).to.eq(403);
      });
    });
  });

  context("Success cases - GET /user", () => {
    it("should return 200 in case of valid Token", () => {
      cy.request({
        failOnStatusCode: false,
        method: "GET",
        url: "https://api.github.com/user",

        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer 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",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  context("Success cases - PATCH /user", () => {
    it("User should able to update user bio", () => {
      cy.request({
        failOnStatusCode: false,
        method: "PATCH",
        url: "https://api.github.com/user",
        bio: "I’m interested in test automation",

        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer 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",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
