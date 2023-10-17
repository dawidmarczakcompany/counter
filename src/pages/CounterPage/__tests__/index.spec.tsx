import { fireEvent, render } from "@testing-library/react-native";
import CounterPage from "..";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../../constants";

const mockedSelectCounterValue = jest.fn();
const mockedSelectHoldIntervalId = jest.fn();
const mockedIncreaseCounter = jest.fn();
const mockedDecreaseCounter = jest.fn();
const mockedSetHoldIntervalId = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockImplementation((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

jest.mock("../../../store/counter/selectors", () => ({
  selectCounterValue: () => mockedSelectCounterValue(),
  selectHoldIntervalId: () => mockedSelectHoldIntervalId(),
}));

jest.mock("../../../store/counter/slice", () => ({
  increaseCounter: () => mockedIncreaseCounter(),
  decreaseCounter: () => mockedDecreaseCounter(),
  setHoldIntervalId: () => mockedSetHoldIntervalId(),
}));

describe("CounterPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("It should render counter page with counter and two buttons", () => {
    const { getByTestId } = render(<CounterPage />);

    const counterText = getByTestId("CounterPage__CounterText");
    expect(counterText).not.toBeNull();

    const decreaseBtn = getByTestId("CounterPage__DecreaseBtn");
    const increaseBtn = getByTestId("CounterPage__IncreaseBtn");

    expect(decreaseBtn).not.toBeNull();
    expect(increaseBtn).not.toBeNull();
  });

  it("Should call increase counter when click on plus button", async () => {
    mockedSelectCounterValue.mockReturnValueOnce(0);

    const { getByTestId } = render(<CounterPage />);

    const counterText = getByTestId("CounterPage__CounterText");
    expect(counterText.props.children).toBe(0);

    const increaseBtn = getByTestId("CounterPage__IncreaseBtn");
    fireEvent.press(increaseBtn);

    expect(mockedIncreaseCounter).toBeCalled();
  });

  it("Should call decrease counter when click on minus button", () => {
    mockedSelectCounterValue.mockReturnValueOnce(10);

    const { getByTestId } = render(<CounterPage />);

    const counterText = getByTestId("CounterPage__CounterText");
    expect(counterText.props.children).toBe(10);

    const decreaseBtn = getByTestId("CounterPage__DecreaseBtn");
    fireEvent.press(decreaseBtn);

    expect(mockedDecreaseCounter).toBeCalled();
  });

  it("Should block plus button if counter reaches the max limit", () => {
    mockedSelectCounterValue.mockReturnValueOnce(MAX_COUNTER_VALUE);

    const { getByTestId } = render(<CounterPage />);

    const counterText = getByTestId("CounterPage__CounterText");
    expect(counterText.props.children).toBe(MAX_COUNTER_VALUE);

    const increaseBtn = getByTestId("CounterPage__IncreaseBtn");
    fireEvent.press(increaseBtn);

    expect(mockedIncreaseCounter).not.toBeCalled();
  });

  it("Should block minus button if counter reaches the min limit", () => {
    mockedSelectCounterValue.mockReturnValueOnce(MIN_COUNTER_VALUE);

    const { getByTestId } = render(<CounterPage />);

    const counterText = getByTestId("CounterPage__CounterText");
    expect(counterText.props.children).toBe(MIN_COUNTER_VALUE);

    const decreaseBtn = getByTestId("CounterPage__DecreaseBtn");
    fireEvent.press(decreaseBtn);

    expect(mockedIncreaseCounter).not.toBeCalled();
  });
});
