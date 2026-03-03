import { Link } from "react-router-dom";

export const Footer = () => {
  const openDiscord = () => {
    window.open("https://discord.gg/7FmWcHZucR", "_blank");
  };

  return (
    <footer className="w-full py-12 mt-20 relative">
      <div className="container px-4">
        <div className="glass rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">DK</h3>
              <p className="text-sm text-muted-foreground">
                Premium FiveM graphics studio creating stunning Blender animations
                and loading screens for gaming communities.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Loading Screens
                  </Link>
                </li>
                <li>
                  <Link to="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link to="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    3D Animations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openDiscord}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} DK Studios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};