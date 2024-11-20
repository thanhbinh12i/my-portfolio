import { Modal } from "react-bootstrap";
import { FaEnvelope, FaCopy } from "react-icons/fa6";
import { useState } from "react";

interface ContactModalProps {
      show: boolean;
      onHide: () => void;
}

const ContactModal = ({ show, onHide }: ContactModalProps) => {
      const [copied, setCopied] = useState(false);
      const email = "nptbinh17092004@gmail.com";

      const handleCopyEmail = () => {
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
      };

      return (
            <>
                  <style>
                        {`
                    .email-container {
                        background: rgba(0, 0, 0, 0.05);
                        padding: 15px;
                        border-radius: 10px;
                        margin: 20px 0;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                    }

                    .copy-button {
                        background: none;
                        border: none;
                        color: #0d6efd;
                        cursor: pointer;
                        padding: 5px;
                        display: flex;
                        align-items: center;
                        transition: color 0.2s ease;
                    }

                    .copy-button:hover {
                        color: #0a58ca;
                    }

                    .copied-tooltip {
                        position: absolute;
                        top: -30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #198754;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 4px;
                        font-size: 12px;
                    }
                `}
                  </style>

                  <Modal
                        show={show}
                        onHide={onHide}
                        centered
                        className="fade"
                  >
                        <Modal.Header closeButton>
                              <Modal.Title className="w-100 text-center">
                                    <FaEnvelope size={30} className="text-primary mb-2" />
                                    <div>Contact Me</div>
                              </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                              <div className="email-container position-relative">
                                    {copied && (
                                          <div className="copied-tooltip">
                                                Copied!
                                          </div>
                                    )}
                                    <span>{email}</span>
                                    <button
                                          className="copy-button"
                                          onClick={handleCopyEmail}
                                          title="Copy email"
                                    >
                                          <FaCopy size={20} />
                                    </button>
                              </div>
                        </Modal.Body>
                  </Modal>
            </>
      );
};

export default ContactModal;