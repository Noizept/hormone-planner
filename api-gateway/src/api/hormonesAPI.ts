import got from "got";

export const getAllHormones = async () => {
  const hormones: any = await got
    .get("http://hormone-service:7101/hormones/")
    .json();
  return hormones;
};
