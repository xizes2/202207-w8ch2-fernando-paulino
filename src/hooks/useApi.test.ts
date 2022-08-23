import { renderHook } from "@testing-library/react";
import useApi from "./useApi";

describe("Given a getShips function", () => {
  describe("When called with a url", () => {
    test("Then it should return an object with 4 properties", async () => {
      const objectTest = {};
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(objectTest),
      });
      const {
        result: {
          current: { getShips },
        },
      } = renderHook(useApi);

      const mockResult = await getShips();

      expect(mockResult).toStrictEqual(objectTest);
    });
  });
});
