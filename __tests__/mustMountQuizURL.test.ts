import { BASE_URL } from "../src/config";
import { mustMountQuizURL } from "../src/utils/mustMountQuizURL";

describe("mustMountQuizURL", () => {
  const mountedURLWithOneQueryParam = mustMountQuizURL(
    BASE_URL,
    "query_param=10"
  );

  it("Should add one query param", () => {
    const expectURL = `${BASE_URL}/api.php?query_param=10`;

    expect(mountedURLWithOneQueryParam).toBe(expectURL);
  });

  const mountedURLWithTwoQueryParams = mustMountQuizURL(
    mountedURLWithOneQueryParam,
    "query_param=20"
  );

  it("Should add two query params", () => {
    const expectURL = `${BASE_URL}/api.php?query_param=10&query_param=20`;

    expect(mountedURLWithTwoQueryParams).toBe(expectURL);
  });

  it("Should add three query params", () => {
    const mountedURL = mustMountQuizURL(
      mountedURLWithTwoQueryParams,
      "query_param=30"
    );
    const expectURL = `${BASE_URL}/api.php?query_param=10&query_param=20&query_param=30`;

    expect(mountedURL).toBe(expectURL);
  });
});
