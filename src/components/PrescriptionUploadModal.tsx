import React, { useState, useRef } from "react";
import { 
  X, 
  Upload, 
  FileText, 
  CheckCircle, 
  Trash2, 
  ShieldCheck, 
  Keyboard, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { STORE_INFO } from "../data";

interface PrescriptionUploadModalProps {
  onClose: () => void;
}

export default function PrescriptionUploadModal({ onClose }: PrescriptionUploadModalProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "typed">("upload");
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploaded, setUploaded] = useState(false);
  const [typedList, setTypedList] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File Upload Handlers (Supports Drag and Drop + Manual Select)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setupFileSimulate(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setupFileSimulate(e.dataTransfer.files[0].name);
    }
  };

  const setupFileSimulate = (name: string) => {
    setFileName(name);
    setUploadProgress(0);
    setUploaded(false);
    
    // Simulate loading progress bar
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploaded(true);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const removeFile = () => {
    setFileName(null);
    setUploadProgress(0);
    setUploaded(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "upload" && !fileName) return;
    if (activeTab === "typed" && !typedList.trim()) return;
    if (!customerName || !customerPhone) return;

    setIsSubmitted(true);
  };

  const triggerWhatsAppRedirection = () => {
    let text = `Hello New Sri Balaji Medical Store!\n\nI am submitting a prescription inquiry from your promotional website:\n\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n`;
    
    if (activeTab === "upload") {
      text += `*Method:* Uploaded prescrip. image (*File Name:* ${fileName})\n*Request:* Please confirm availability of medicines shown in this uploaded prescription image.`;
    } else {
      text += `*Method:* Typed medicine list\n*Medication List:* \n${typedList}\n\n*Request:* Please confirm stock, brand availability, and price estimate.`;
    }

    const waUrl = `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      
      {/* Modal Container */}
      <div 
        id="prescription-upload-modal"
        className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 border border-slate-150 relative shadow-2xl flex flex-col justify-between max-h-[90vh] overflow-y-auto"
      >
        {/* Header Title Close */}
        <div className="flex items-center justify-between border-b pb-4 mb-5">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100">
              <FileText className="h-5.5 w-5.5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-850 text-base sm:text-lg tracking-tight">
                Inquire Prescription Meds
              </h3>
              <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-widest leading-none">
                {STORE_INFO.license}
              </p>
            </div>
          </div>
          <button
            id="prescription-modal-close-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer"
            title="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success Submit Instructions */
          <div className="text-center py-8 space-y-6">
            <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full mx-auto flex items-center justify-center font-black text-2xl border border-emerald-100">
              ✓
            </div>
            <div className="space-y-2">
              <h4 className="font-sans font-black text-slate-900 text-lg sm:text-xl">
                Ready to Send to Pharmacist!
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold max-w-sm mx-auto">
                Your details are perfectly compiled. Click below to securely connect with our registered pharmacist on WhatsApp and send your prescription. M. Venkata Bala Sundar (B.Pharm) will immmediately reply with availability!
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl text-left border text-xs text-slate-600 space-y-1 max-w-sm mx-auto">
              <p><strong>Name:</strong> {customerName}</p>
              <p><strong>Method:</strong> {activeTab === "upload" ? "Uploaded Prescription Photo" : "Typed Medicine List"}</p>
            </div>

            <button
              id="modal-send-whatsapp-confirm"
              onClick={triggerWhatsAppRedirection}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              Open WhatsApp Chat Now
            </button>
          </div>
        ) : (
          /* Normal modal entry form */
          <form onSubmit={handleModalSubmit} className="space-y-5">
            
            {/* Tabs Trigger */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-55 border border-slate-200/50 rounded-xl text-center text-xs font-extrabold text-slate-500 mb-4 select-none">
              <button
                type="button"
                id="modal-tab-upload"
                onClick={() => setActiveTab("upload")}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === "upload" 
                    ? "bg-white text-slate-800 shadow-3xs" 
                    : "hover:text-slate-800"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <Upload className="h-4 w-4" />
                  <span>Upload Image/PDF</span>
                </div>
              </button>
              <button
                type="button"
                id="modal-tab-typed"
                onClick={() => setActiveTab("typed")}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === "typed" 
                    ? "bg-white text-slate-800 shadow-3xs" 
                    : "hover:text-slate-800"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <Keyboard className="h-4 w-4" />
                  <span>Type Out List</span>
                </div>
              </button>
            </div>

            {/* TAB 1: FILE DRAG UPLOAD CARD */}
            {activeTab === "upload" ? (
              <div className="space-y-3">
                <span className="text-xs font-black text-slate-600 uppercase tracking-wider block">
                  Drag & Drop Prescription Photo
                </span>
                
                {fileName ? (
                  /* Upload Status Card */
                  <div className="border border-slate-150 rounded-2xl p-4 bg-slate-50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 shrink min-w-0">
                      <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="shrink min-w-0 text-left">
                        <p className="text-xs font-extrabold text-slate-850 truncate">{fileName}</p>
                        {uploaded ? (
                          <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                            Uploaded Successfully Ready
                          </p>
                        ) : (
                          <div className="space-y-1.5 mt-1">
                            <div className="w-24 bg-slate-200 h-1 rounded-full overflow-hidden">
                              <div 
                                className="bg-blue-600 h-full rounded-full transition-all duration-150" 
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                            <p className="text-[9px] text-slate-400 font-medium">Compressing: {uploadProgress}%</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      id="modal-delete-uploaded-file-btn"
                      onClick={removeFile}
                      className="text-red-500 hover:bg-slate-100 p-2 rounded-xl cursor-pointer"
                      title="Delete uploaded image"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  </div>
                ) : (
                  /* Active Upload Dropzone Area */
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 hover:border-blue-500/80 rounded-2xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-all select-none"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="h-10 w-10 text-slate-355 mx-auto mb-3 animate-pulse" />
                    <p className="text-xs font-extrabold text-slate-700">Drag prescription image here or select file</p>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1">JPEG, PNG, or PDF format supported</p>
                  </div>
                )}
              </div>
            ) : (
              /* TAB 2: TYPED TEXT AREA */
              <div className="space-y-1.5 text-left">
                <label htmlFor="modal-typed-list-input" className="text-xs font-black text-slate-650 uppercase tracking-wider">
                  Type Out Tablet Names & Dosages
                </label>
                <textarea
                  id="modal-typed-list-input"
                  required
                  rows={4}
                  placeholder="e.g. Paracetamol 650mg - 1 strip (10 tablets)&#10;Dolo 650 - 1 strip&#10;ORS Sachet - 5 packets"
                  value={typedList}
                  onChange={(e) => setTypedList(e.target.value)}
                  className="w-full px-4 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all font-sans resize-none"
                />
              </div>
            )}

            {/* Client Metadata Info */}
            <div className="space-y-3.5 border-t border-slate-100 pt-4 text-left">
              <span className="text-xs font-black text-slate-650 uppercase tracking-wider block">
                Your Contact Information
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-client-name-input" className="text-[10px] font-bold text-slate-500 uppercase">Your Name</label>
                  <input
                    id="modal-client-name-input"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-805 focus:outline-hidden focus:border-blue-500 transition-all font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="modal-client-phone-input" className="text-[10px] font-bold text-slate-500 uppercase">Your Phone / WhatsApp</label>
                  <input
                    id="modal-client-phone-input"
                    type="tel"
                    required
                    placeholder="e.g. +91 93465 52839"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-805 focus:outline-hidden focus:border-blue-500 transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            {/* Checkbox Compliance disclaimer */}
            <div className="flex gap-2.5 items-start p-3.5 bg-blue-100/30 border border-blue-100/50 rounded-xl text-[10px] sm:text-[11px] text-slate-500 font-semibold leading-relaxed text-left select-none">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
              <p>We operate in strict obedience to Indian Pharmacy Regulations. All Schedule H medicines require validation of doctor's authentic prescription on final collection or doorstep dropoff.</p>
            </div>

            {/* Submit layout buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                id="modal-cancel-btn"
                onClick={onClose}
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-colors text-xs cursor-pointer text-center"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                id="modal-submit-btn"
                className="w-2/3 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-3.5 rounded-xl transition-colors text-xs shadow-xs hover:shadow-md cursor-pointer"
              >
                Compile Submission
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
