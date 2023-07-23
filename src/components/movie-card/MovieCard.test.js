import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./MovieCard.js";
import "../../setupTests.js";

const movie = {
  EventGroup: "EG00071990",
  EventTitle: "Notebook",
  EventCode: "ET00093903",
  EventImageCode: "notebook-2019-et00093903-10-01-2019-03-50-36",
  EventImageUrl:
    "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/medium/notebook-2019-et00093903-10-01-2019-03-50-36.jpg",
  EventLanguage: "Hindi",
  EventGenre: "Drama|Romance",
  EventURL: "notebook",
  EventName: "Notebook",
  ShowDate: "29 Mar, 2019",
  DispReleaseDate: "MARCH 29, 2019",
  MonthID: "201903",
  TrailerURL: "https://www.youtube.com/watch?v=SXYxOCLc9-c",
  AllowPreBook: "N",
  IsAtmosEnabled: "N",
  TentativeReleaseDate: "0",
  EventIsDefault: "Y",
  EventCensor: "U",
  EventDimension: "2D",
  TrailerURLUploadDate: "2019-02-22 19:34:18",
  LanguageSequence: "1",
  IsMovieClubEnabled: "N",
  IsPremiere: "N",
  ratings: "{avgRating: 0, bmsRating: 0, bmsCount: 0, criticRat…}",
  Region: '["AHD", "AHMED", "AND", "ALI", "ALLH", "AMRI", "AJM…]',
  wtsCount: 9010,
  dwtsCount: 16,
  maybeCount: 0,
  csCount: "9,026",
  trailerUploadDate: 1550844258000,
  totalVotes: 0,
  avgRating: 0,
  wtsPerc: 100,
  trailerType: "cs"
};

let wrapped = shallow(<MovieCard movie={movie} />);
describe("Movie Card", () => {
  it("should render image", () => {
    const imageWrapper = wrapped.find(
      `#movie-card-${movie["EventCode"]}-image`
    );
    expect(imageWrapper).toBeTruthy();
  });
  it("should render event name", () => {
    const nameWrapper = wrapped.find(`#movie-card-${movie["EventCode"]}-name`);
    expect(nameWrapper.text()).toEqual("Notebook");
  });
  it("should render event language", () => {
    const nameWrapper = wrapped.find(
      `#movie-card-${movie["EventCode"]}-language`
    );
    expect(nameWrapper.text()).toEqual("Hindi");
  });
});
