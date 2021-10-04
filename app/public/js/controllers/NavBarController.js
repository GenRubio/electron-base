export const NavBarController = {
  init() {
    this.setListeners();
  },
  setListeners() {
    $(document).on("click", "#home-page", function (event) {
      NavBarController.loadHomePageHandler();
    });
    $(document).on("click", "#contacto-page", function (event) {
      NavBarController.loadContactPageHandler();
    });
  },
  loadHomePageHandler() {
    $("#content").load(View.pages.home);
  },
  loadContactPageHandler() {
    $("#content").load(View.pages.contacto);
  },
};
