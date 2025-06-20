import { PaperMetadata, PaperVersion, Comment } from '@/types/paper';

export const mockPaperData: PaperMetadata = {
  id: "1",
  title: "Quantum-Enhanced Neural Networks: Exponential Speedup in High-Dimensional Feature Learning through Variational Quantum Circuits",
  authors: [
    { name: "Dr. Li Zhang", affiliation: "MIT Computer Science and Artificial Intelligence Laboratory", email: "l.zhang@mit.edu" },
    { name: "Dr. Sanjay Patel", affiliation: "MIT Department of Physics", email: "s.patel@mit.edu" },
    { name: "Dr. Michael Johnson", affiliation: "Stanford University Department of Computer Science", email: "m.johnson@stanford.edu" },
    { name: "Dr. Ana Rodriguez", affiliation: "UC Berkeley Quantum Information Science", email: "a.rodriguez@berkeley.edu" },
    { name: "Dr. Yuki Tanaka", affiliation: "RIKEN Center for Quantum Computing", email: "y.tanaka@riken.jp" }
  ],
  abstract: "In this paper, we present a novel framework for quantum-enhanced neural networks that achieves exponential speedup in learning tasks involving high-dimensional feature spaces. Our approach leverages variational quantum circuits (VQCs) integrated with classical neural architectures to exploit quantum superposition and entanglement for enhanced representational capacity. We demonstrate that our quantum neural network (QNN) architecture can solve certain NP-hard optimization problems with polynomial quantum resources, providing a quadratic speedup over classical counterparts. Through extensive experiments on benchmark datasets including MNIST, CIFAR-10, and synthetic high-dimensional data, we show consistent performance improvements of 15-35% in accuracy while reducing training time by up to 60%. Our theoretical analysis proves that the quantum advantage stems from the exponential growth of the Hilbert space dimension, enabling efficient exploration of solution landscapes that are computationally intractable for classical methods.",
  keywords: ["quantum computing", "neural networks", "machine learning", "variational quantum circuits", "NISQ devices", "quantum supremacy", "optimization", "high-dimensional learning"],
  doi: "10.1038/s41586-025-07123-4",
  publishDate: "2025-05-15",
  field: "Quantum Computing",
  journal: "Nature",
  currentVersion: "v3.0",
  versions: [
    {
      id: "v1",
      version: "v1.0",
      date: "2025-03-15",
      changes: "Initial submission with basic framework",
      content: [
        {
          id: "title-1",
          type: "title",
          content: "Quantum Computing and Neural Networks: A Basic Approach to Machine Learning"
        },
        {
          id: "abstract-1",
          type: "abstract",
          content: "This paper explores quantum computing applications in neural networks, proposing a framework for quantum-enhanced machine learning algorithms with preliminary theoretical foundations."
        }
      ]
    },
    {
      id: "v2",
      version: "v2.0", 
      date: "2025-04-10",
      changes: "Added experimental results, improved methodology section, addressed reviewer concerns",
      content: [
        {
          id: "title-2",
          type: "title",
          content: "Quantum-Enhanced Neural Networks: An Advanced Approach to High-Dimensional Learning"
        },
        {
          id: "abstract-2",
          type: "abstract",
          content: "In this paper, we explore the intersection of quantum computing and neural networks, proposing a comprehensive framework for quantum-enhanced machine learning algorithms. We demonstrate significant improvements over classical approaches through theoretical analysis and experimental validation."
        }
      ]
    },
    {
      id: "v3",
      version: "v3.0",
      date: "2025-05-15", 
      changes: "Final version with peer review feedback incorporated, exponential speedup claims with rigorous proof, additional experiments",
      content: [
        {
          id: "title-3",
          type: "title",
          content: "Quantum-Enhanced Neural Networks: Exponential Speedup in High-Dimensional Feature Learning through Variational Quantum Circuits"
        },
        {
          id: "abstract-3",
          type: "abstract",
          content: "In this paper, we present a novel framework for quantum-enhanced neural networks that achieves exponential speedup in learning tasks involving high-dimensional feature spaces. Our approach leverages variational quantum circuits (VQCs) integrated with classical neural architectures to exploit quantum superposition and entanglement for enhanced representational capacity. We demonstrate that our quantum neural network (QNN) architecture can solve certain NP-hard optimization problems with polynomial quantum resources, providing a quadratic speedup over classical counterparts. Through extensive experiments on benchmark datasets including MNIST, CIFAR-10, and synthetic high-dimensional data, we show consistent performance improvements of 15-35% in accuracy while reducing training time by up to 60%. Our theoretical analysis proves that the quantum advantage stems from the exponential growth of the Hilbert space dimension, enabling efficient exploration of solution landscapes that are computationally intractable for classical methods."
        },
        {
          id: "intro-3",
          type: "introduction",
          content: "Machine learning algorithms have revolutionized computational science, enabling breakthroughs in computer vision¹, natural language processing², and scientific discovery³. However, as datasets grow exponentially in size and complexity, classical computing architectures increasingly struggle with the curse of dimensionality⁴. Traditional neural networks require computational resources that scale exponentially with problem size for many optimization tasks, creating fundamental barriers to progress in artificial intelligence⁵.\n\nQuantum computing offers a promising paradigm to transcend these classical limitations through its unique computational properties. Quantum superposition allows qubits to exist in coherent linear combinations of basis states, enabling quantum systems to represent and manipulate exponentially large state spaces with polynomial resources⁶. Quantum entanglement further enhances this computational power by creating non-local correlations that have no classical analog⁷.\n\nRecent advances in noisy intermediate-scale quantum (NISQ) devices⁸ have made it feasible to explore near-term quantum machine learning applications. Variational quantum circuits (VQCs) have emerged as particularly promising candidates for quantum machine learning, as they can be optimized using classical gradient-based methods while leveraging quantum computational advantages⁹.\n\nOur work addresses three fundamental challenges in quantum machine learning: (1) How can quantum circuits be effectively integrated with classical neural architectures? (2) What theoretical guarantees exist for quantum speedup in learning tasks? (3) How do quantum neural networks perform on real-world datasets compared to state-of-the-art classical methods?\n\nWe make the following key contributions: First, we propose a hybrid quantum-classical neural network architecture that achieves provable exponential speedup for certain learning problems. Second, we provide rigorous theoretical analysis showing that our approach can solve NP-hard optimization problems with polynomial quantum resources. Third, we demonstrate superior empirical performance on multiple benchmark datasets. Finally, we identify the precise conditions under which quantum advantage emerges in neural learning tasks."
        },
        {
          id: "related-3",
          type: "methodology",
          content: "**Related Work**\n\nQuantum machine learning has emerged as a rapidly growing field at the intersection of quantum computing and artificial intelligence. Early theoretical work by Schuld et al.¹⁰ established foundational connections between quantum computing and machine learning, while Lloyd et al.¹¹ demonstrated quantum algorithms for principal component analysis with exponential speedup.\n\nVariational quantum algorithms have gained significant attention for their compatibility with NISQ devices. Peruzzo et al.¹² introduced the variational quantum eigensolver (VQE), inspiring subsequent work on variational quantum machine learning¹³. Farhi and Neven¹⁴ proposed the quantum approximate optimization algorithm (QAOA), which has been adapted for various machine learning tasks.\n\nSeveral approaches to quantum neural networks have been explored. McClean et al.¹⁵ developed parameterized quantum circuits for machine learning, while Mitarai et al.¹⁶ introduced quantum circuit learning with gradient-based optimization. More recently, Cerezo et al.¹⁷ provided a comprehensive framework for variational quantum algorithms.\n\nHowever, existing approaches suffer from several limitations: (1) most theoretical analyses rely on unrealistic assumptions about quantum hardware; (2) experimental demonstrations have been limited to toy problems; (3) the conditions for quantum advantage remain poorly understood. Our work addresses these limitations through rigorous theoretical analysis and comprehensive experimental validation.\n\n**Methodology**\n\nOur quantum-enhanced neural network architecture consists of three main components: (1) a classical preprocessing layer that maps input data to quantum-compatible representations, (2) a variational quantum circuit that performs the core computational task, and (3) a classical post-processing layer that produces the final output.\n\n**Quantum Circuit Architecture**\n\nThe variational quantum circuit is constructed using a layered approach with alternating rotation and entangling gates. For an n-qubit system, each layer consists of:\n\n**Equation 1:** Single-qubit rotations:\n*R_y(θᵢ)|ψ⟩ = cos(θᵢ/2)|ψ⟩ + sin(θᵢ/2)σᵧ|ψ⟩*\n\n**Equation 2:** Controlled-Z entangling gates:\n*CZ_{i,j} = |0⟩⟨0| ⊗ I + |1⟩⟨1| ⊗ Z*\n\nThe complete quantum circuit implements the transformation:\n\n**Equation 3:** Quantum Neural Network Operation:\n*|ψ_out⟩ = U_L(θ_L) ∘ ... ∘ U_1(θ_1)|ψ_in⟩*\n\nwhere each U_k represents a layer of parameterized quantum gates.\n\n**Classical Integration**\n\nThe quantum circuit is embedded within a classical neural network framework. Input features x ∈ ℝᵈ are encoded into quantum states using amplitude encoding:\n\n**Equation 4:** Quantum State Encoding:\n*|ψ_in⟩ = (1/√N) Σᵢ xᵢ|i⟩*\n\nwhere N = Σᵢ |xᵢ|² ensures proper normalization.\n\nThe quantum measurement produces expectation values that serve as input to classical neural layers:\n\n**Equation 5:** Measurement and Classical Processing:\n*y = f_classical(⟨ψ_out|M₁|ψ_out⟩, ..., ⟨ψ_out|M_k|ψ_out⟩)*\n\nwhere M_k are Pauli measurement operators and f_classical is a classical neural network.\n\n**Training Algorithm**\n\nWe employ a hybrid optimization approach combining quantum parameter updates with classical backpropagation. The quantum parameters θ are optimized using the parameter-shift rule¹⁸:\n\n**Equation 6:** Quantum Gradient Computation:\n*∂⟨H⟩/∂θᵢ = (1/2)[⟨H⟩_{θᵢ + π/2} - ⟨H⟩_{θᵢ - π/2}]*\n\nClassical parameters are updated using standard gradient descent with adaptive learning rates."
        },
        {
          id: "results-3",
          type: "results",
          content: "**Experimental Setup**\n\nWe implemented our quantum neural network framework using Qiskit and PennyLane, with experiments conducted on both quantum simulators and real quantum hardware including IBM Quantum devices and Google's Sycamore processor. All classical baselines were implemented using PyTorch and TensorFlow.\n\n**Benchmark Datasets**\n\nWe evaluated our approach on three categories of problems:\n\n1. **Image Classification**: MNIST (28×28 grayscale), CIFAR-10 (32×32 RGB), and Fashion-MNIST\n2. **High-Dimensional Synthetic Data**: Randomly generated datasets with dimensions ranging from 100 to 1000\n3. **Optimization Problems**: Graph coloring, traveling salesman problem variants, and portfolio optimization\n\n**Performance Results**\n\nOur quantum-enhanced neural network consistently outperformed classical baselines across all tested scenarios:\n\n**Image Classification Results:**\n- MNIST: 99.2% accuracy (vs. 98.1% classical CNN)\n- CIFAR-10: 94.7% accuracy (vs. 91.2% classical CNN)\n- Fashion-MNIST: 92.1% accuracy (vs. 89.3% classical CNN)\n\n**Training Efficiency:**\nThe quantum approach demonstrated significant speedup in training time:\n- 60% reduction in epochs required for convergence\n- 45% reduction in total training time\n- Superior generalization with 23% lower validation loss\n\n**Scalability Analysis**\n\nWe analyzed how performance scales with problem dimension. For classical neural networks, accuracy degraded exponentially with dimension d according to:\n\n**Equation 7:** Classical Scaling:\n*Accuracy_classical ∝ exp(-αd²)*\n\nIn contrast, our quantum approach maintained performance:\n\n**Equation 8:** Quantum Scaling:\n*Accuracy_quantum ∝ exp(-βd)*\n\nwhere β ≪ α, demonstrating the quantum advantage for high-dimensional problems.\n\n**Theoretical Analysis**\n\nWe prove that our quantum neural network can solve certain NP-hard problems with polynomial resources. The key insight is that quantum superposition enables exploration of exponentially large solution spaces:\n\n**Theorem 1:** For optimization problems with n variables, our quantum algorithm requires O(poly(n)) quantum operations compared to O(exp(n)) classical operations.\n\n**Proof Sketch:** The quantum circuit creates superposition states spanning the entire solution space. Quantum interference amplifies correct solutions while suppressing incorrect ones, enabling efficient optimization.\n\n**Noise Analysis**\n\nWe conducted extensive analysis of how quantum noise affects performance. Surprisingly, modest levels of noise (coherence times T₂ > 100μs) had minimal impact on accuracy, while providing a regularization effect that improved generalization.\n\n**Hardware Implementation**\n\nExperiments on IBM Quantum devices (up to 27 qubits) confirmed our theoretical predictions. Real hardware results showed only 5-8% degradation compared to ideal simulations, demonstrating practical viability of our approach."
        },
        {
          id: "discussion-3",
          type: "discussion",
          content: "**Discussion and Analysis**\n\nOur results demonstrate that quantum-enhanced neural networks can achieve significant advantages over classical approaches, particularly for high-dimensional learning tasks. The observed performance improvements stem from three key quantum phenomena:\n\n**Quantum Superposition Benefits**\n\nQuantum superposition enables our neural network to explore exponentially large solution spaces efficiently. While classical neural networks must evaluate potential solutions sequentially, quantum circuits can evaluate multiple solutions simultaneously through coherent superposition states.\n\n**Entanglement-Enhanced Representation**\n\nQuantum entanglement creates correlations between qubits that have no classical analog. These correlations enable more efficient representation of complex, high-dimensional data structures. Our analysis shows that entangled quantum states can represent certain functions using exponentially fewer parameters than classical networks.\n\n**Quantum Interference for Optimization**\n\nThe optimization landscape in quantum neural networks benefits from quantum interference effects. Constructive interference amplifies paths leading to optimal solutions, while destructive interference suppresses suboptimal paths. This quantum interference provides a natural mechanism for avoiding local minima that plague classical optimization.\n\n**Limitations and Challenges**\n\nDespite promising results, several challenges remain:\n\n1. **Quantum Error Rates**: Current NISQ devices have error rates of 0.1-1%, limiting circuit depth and problem size.\n\n2. **Connectivity Constraints**: Physical qubit connectivity in current devices restricts circuit topology, potentially limiting quantum advantage.\n\n3. **Classical Simulation**: For small problem sizes, classical simulation of quantum circuits may be more efficient than actual quantum hardware.\n\n**Theoretical Implications**\n\nOur work has several important theoretical implications:\n\n**Complexity Theory**: We provide evidence that quantum neural networks can solve certain problems in BQP (Bounded-Error Quantum Polynomial Time) that are believed to be outside P (Polynomial Time).\n\n**Learning Theory**: Our results suggest that quantum learning algorithms may achieve better sample complexity than classical approaches for certain problem classes.\n\n**Quantum Advantage**: We identify specific conditions under which quantum advantage emerges: high-dimensional feature spaces, complex optimization landscapes, and problems with inherent quantum structure.\n\n**Future Directions**\n\nSeveral promising research directions emerge from this work:\n\n1. **Fault-Tolerant Quantum Neural Networks**: Developing error-corrected quantum neural networks for larger-scale problems.\n\n2. **Quantum Transfer Learning**: Adapting pre-trained quantum models to new tasks with minimal additional training.\n\n3. **Hybrid Classical-Quantum Architectures**: Exploring optimal ways to combine classical and quantum components for maximum advantage.\n\n4. **Application-Specific Quantum Circuits**: Designing specialized quantum circuits for specific machine learning tasks.\n\n**Comparison with Prior Work**\n\nOur approach advances beyond previous quantum machine learning work in several key ways:\n\n- **Scale**: We demonstrate quantum advantage on realistic datasets, not just toy problems\n- **Rigor**: Our theoretical analysis provides provable guarantees for quantum speedup\n- **Practicality**: We show that quantum advantage persists on real NISQ hardware\n- **Generality**: Our framework applies to a broad class of machine learning problems\n\n**Statistical Significance**\n\nAll reported performance improvements are statistically significant (p < 0.001) based on extensive cross-validation and bootstrap analysis. We conducted over 10,000 independent runs for each experimental condition to ensure robust statistical conclusions."
        },
        {
          id: "conclusion-3",
          type: "conclusion",
          content: "**Conclusion**\n\nWe have presented a comprehensive framework for quantum-enhanced neural networks that demonstrates provable exponential speedup in high-dimensional feature learning tasks. Our theoretical analysis establishes rigorous foundations for quantum advantage in machine learning, while experimental results on both simulated and real quantum hardware validate the practical viability of our approach.\n\n**Key Contributions:**\n\n1. **Novel Architecture**: We introduced a hybrid quantum-classical neural network that seamlessly integrates variational quantum circuits with classical deep learning components.\n\n2. **Theoretical Guarantees**: We proved that our quantum approach can solve certain NP-hard optimization problems with polynomial quantum resources, providing quadratic speedup over the best known classical algorithms.\n\n3. **Experimental Validation**: Comprehensive experiments on benchmark datasets demonstrate 15-35% accuracy improvements and 60% reduction in training time compared to state-of-the-art classical methods.\n\n4. **Practical Implementation**: We showed that quantum advantage persists on current NISQ devices, making our approach viable for near-term applications.\n\n**Broader Impact**\n\nThis work contributes to the growing field of quantum machine learning and highlights the transformative potential of quantum computing for artificial intelligence. As quantum hardware continues to improve, we expect quantum-enhanced neural networks to enable breakthroughs in scientific discovery, drug development, financial modeling, and other domains requiring analysis of high-dimensional data.\n\n**Future Research**\n\nSeveral important questions remain for future investigation: How can we extend quantum advantage to broader classes of machine learning problems? What are the fundamental limits of quantum speedup in learning tasks? How can we design quantum neural networks that are robust to various types of quantum noise?\n\nOur work establishes quantum-enhanced neural networks as a promising direction for achieving artificial intelligence capabilities that surpass classical limitations. As quantum technology matures, we anticipate that quantum machine learning will play an increasingly central role in the next generation of AI systems.\n\n**Acknowledgments**\n\nWe thank the IBM Quantum team for providing access to quantum hardware and the MIT-IBM Watson AI Lab for computational resources. We also acknowledge helpful discussions with colleagues at the MIT Center for Quantum Engineering and the Stanford Quantum Computing Group. This work was supported by NSF grants PHY-2016136 and CCF-2045847, DOE grant DE-SC0020266, and the MIT-Google Quantum Research Initiative.\n\n**Author Contributions**\n\nL.Z. conceived the project and developed the theoretical framework. S.P. designed the quantum circuits and conducted quantum hardware experiments. M.J. implemented classical baselines and performed statistical analysis. A.R. contributed to the optimization algorithms and theoretical proofs. Y.T. conducted the noise analysis and hardware characterization. All authors contributed to writing and editing the manuscript.\n\n**Data Availability**\n\nExperimental data and code are available at https://github.com/quantum-neural-networks/qnn-nature-2025. Quantum circuit implementations are provided in Qiskit and PennyLane formats.\n\n**Competing Interests**\n\nThe authors declare no competing financial interests.\n\n**References**\n\n1. LeCun, Y., Bengio, Y. & Hinton, G. Deep learning. Nature 521, 436–444 (2015).\n2. Devlin, J. et al. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. NAACL-HLT (2019).\n3. Jumper, J. et al. Highly accurate protein structure prediction with AlphaFold. Nature 596, 583–589 (2021).\n4. Bellman, R. E. Adaptive Control Processes: A Guided Tour (Princeton University Press, 1961).\n5. Arute, F. et al. Quantum supremacy using a programmable superconducting processor. Nature 574, 505–510 (2019).\n6. Nielsen, M. A. & Chuang, I. L. Quantum Computation and Quantum Information (Cambridge University Press, 2010).\n7. Einstein, A., Podolsky, B. & Rosen, N. Can quantum-mechanical description of physical reality be considered complete? Phys. Rev. 47, 777–780 (1935).\n8. Preskill, J. Quantum computing in the NISQ era and beyond. Quantum 2, 79 (2018).\n9. Cerezo, M. et al. Variational quantum algorithms. Nat. Rev. Phys. 3, 625–644 (2021).\n10. Schuld, M., Sinayskiy, I. & Petruccione, F. An introduction to quantum machine learning. Contemp. Phys. 56, 172–185 (2015)."
        }
      ]
    }
  ]
};

export const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Dr. Emma Chen",
      initials: "EC", 
      affiliation: "MIT",
      isVerified: true,
      reputation: 89
    },
    text: "Have you considered how quantum error correction might affect the scalability of your approach? Current NISQ devices have significant noise limitations that could impact the claimed exponential advantage.",
    timestamp: "3 days ago",
    sectionId: "method-3",
    selectedText: "27-qubit superconducting quantum processor",
    likes: 24,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Dr. Li Zhang",
          initials: "LZ",
          affiliation: "MIT",
          isVerified: true,
          reputation: 95
        },
        text: "Great point! We address this in our error analysis section. While NISQ limitations exist, our results show the advantage persists even with current noise levels.",
        timestamp: "2 days ago",
        sectionId: "method-3",
        selectedText: "",
        likes: 12,
        replies: []
      }
    ],
    isHighlighted: true
  },
  {
    id: "2",
    author: {
      name: "Prof. David Williams",
      initials: "DW",
      affiliation: "Oxford University", 
      isVerified: true,
      reputation: 92
    },
    text: "I'm skeptical about the claimed 15-20% improvement. Could this be due to the specific nature of the test datasets rather than a general quantum advantage? Have you tested on more diverse datasets?",
    timestamp: "2 days ago",
    sectionId: "results-3", 
    selectedText: "15-20% performance improvement",
    likes: 18,
    replies: [],
    isHighlighted: true
  },
  {
    id: "3",
    author: {
      name: "Dr. Alexandra Martinez",
      initials: "AM",
      affiliation: "Google Quantum AI",
      isVerified: true,
      reputation: 87
    },
    text: "Interesting approach with the amplitude encoding. Have you explored other encoding schemes like basis encoding or quantum feature maps? The choice of encoding can significantly impact performance.",
    timestamp: "1 day ago",
    sectionId: "method-3",
    selectedText: "encoding layer that maps classical data into the quantum Hilbert space",
    likes: 15,
    replies: []
  }
];
