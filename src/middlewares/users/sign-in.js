import { setAlertMessage, setUserData } from '../../redux/actions/creators/sign-in-data';
import { runLoader, stopLoader } from '../../redux/actions/creators/loader-creator';
import postRequest from '../../helpers/fetch-utils/post-response';
import getRequest from '../../helpers/fetch-utils/getWithToken-response';
import { getCookie } from '../../helpers/cookies-utils';
import { putSettings } from '../usersSettings/settings';
import { putProgress } from '../usersStatistic/statistics';

// import serverSynchronization from '../serverSynchronization';
import API_URLS from '../../constants/APIUrls';
import { USER_ID, TOKEN } from '../../constants/cookiesNames';

const isFirsInit = async () => {
  const url = API_URLS.USER_SETTINGS(getCookie(USER_ID));
  const rawResponseSetiings = await getRequest(url, getCookie(TOKEN));

  return !rawResponseSetiings.ok;
};

const signIn = (login, password) => {
  return async (dispatch) => {
    try {
      dispatch(runLoader());
      const url = API_URLS.SIGN_IN;
      const body = JSON.stringify({ email: login, password });
      const rawResponse = await postRequest(url, body);
      const { token, userId } = await rawResponse.json();

      dispatch(setUserData({ token, userId }));
      if (await isFirsInit()) {
        dispatch(putSettings());
        dispatch(putProgress());
      }
      // await dispatch(serverSynchronization());
      dispatch(stopLoader());
    } catch (error) {
      dispatch(setAlertMessage('неверные данные'));
      dispatch(stopLoader());
    }
  };
};

export default signIn;
